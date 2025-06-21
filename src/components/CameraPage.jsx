import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useFirebase } from "../hooks/useFirebase";
import { useAppContext } from "../hooks/useAppContext";

export default function CameraPage() {
  console.log("CameraPage component is rendering");
  const [imageUrls, setImageUrls] = useState({});
  const [buttonNames, setButtonNames] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { tokens, authChecked } = useFirebase();
  const { setCameraLoading, isCameraFading } = useAppContext();

  useEffect(() => {
    if (!authChecked) return;

    // Report initial loading state
    setCameraLoading(true);

    const db = getDatabase();
    const unsubscribeFunctions = [];
    const initialLoadStatus = {};

    if (tokens.length === 0) {
      setIsLoading(false);
      setImageUrls({});
      setButtonNames({});
      setCameraLoading(false);
      return;
    }

    setIsLoading(true);

    tokens.forEach(token => {
      const imageUrlRef = ref(db, `tokens/${token}/camera/imageUrl`);
      const buttonNameRef = ref(db, `tokens/${token}/buttonName`);
      console.log("📡 Watching:", `tokens/${token}/camera/imageUrl`, `tokens/${token}/buttonName`);
      initialLoadStatus[token] = { imageUrlLoaded: false, buttonNameLoaded: false };

      const unsubscribeImageUrl = onValue(imageUrlRef, (snapshot) => {
        const url = snapshot.val();
        setImageUrls(prevUrls => {
          const newUrls = { ...prevUrls };
          if (url && typeof url === "string" && url.startsWith("http")) {
            newUrls[token] = url + `&cb=${Date.now()}`;
          } else {
            delete newUrls[token];
          }
          return newUrls;
        });

        initialLoadStatus[token].imageUrlLoaded = true;
        if (initialLoadStatus[token].buttonNameLoaded) {
          initialLoadStatus[token] = true;
        }

        const allLoaded = Object.values(initialLoadStatus).every(status => status === true);
        if (allLoaded) {
          setIsLoading(false);
          setCameraLoading(false);
        }
      });
      unsubscribeFunctions.push(unsubscribeImageUrl);

      const unsubscribeButtonName = onValue(buttonNameRef, (snapshot) => {
        const name = snapshot.val();
        setButtonNames(prevNames => {
          const newNames = { ...prevNames };
          if (name) {
            newNames[token] = name;
          } else {
            delete newNames[token];
          }
          return newNames;
        });

        initialLoadStatus[token].buttonNameLoaded = true;
        if (initialLoadStatus[token].imageUrlLoaded) {
          initialLoadStatus[token] = true;
        }

        const allLoaded = Object.values(initialLoadStatus).every(status => status === true);
        if (allLoaded) {
          setIsLoading(false);
          setCameraLoading(false);
        }
      });
      unsubscribeFunctions.push(unsubscribeButtonName);
    });

    // Cleanup function
    return () => {
      unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
      setCameraLoading(false);
    };
  }, [tokens, authChecked, setCameraLoading]);

  const handleSendCommand = async () => {
    const db = getDatabase();
    for (const token of tokens) {
      const commandPath = `tokens/${token}/photo`;
      try {
        // Send 'snap' command
        await set(ref(db, commandPath), 'snap');
        console.log(`Sent 'snap' command to token: ${token}`);

        // Wait for 1 second and send 'hello'
        setTimeout(async () => {
          await set(ref(db, commandPath), 'hello');
          console.log(`Sent 'hello' command to token: ${token}`);
        }, 1000);

      } catch (error) {
        console.error(`Error sending command to token ${token}:`, error);
      }
    }
  };

  const hasImages = Object.keys(imageUrls).length > 0;

  return (
    <div className="camera-page-screen">
      <div className="camera-content">
        <button
          onClick={handleSendCommand}
          className={`refresh-button ${isCameraFading ? 'fade-in-element' : ''}`}
        >
          Refresh
        </button>
        {isLoading ? (
          <p className={`loading-text ${isCameraFading ? 'fade-in-element delay-1' : ''}`}>
            Loading cameras...
          </p>
        ) : hasImages ? (
          <div className={`camera-grid ${isCameraFading ? 'fade-in-element delay-2' : ''}`}>
            <div className="camera-grid-container">
              {tokens.map((token, idx) => imageUrls[token] ? (
                <div key={token} className="camera-item">
                  <div
                    className="camera-card"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <h3 className="camera-title">
                      {buttonNames[token] || `Camera ${idx + 1}`}
                    </h3>
                    <img
                      src={imageUrls[token]}
                      alt={`Camera Snapshot for ${token}`}
                      className="camera-image"
                    />
                  </div>
                </div>
              ) : null)}
            </div>
          </div>
        ) : (
          <p className={`no-images-text ${isCameraFading ? 'fade-in-element delay-1' : ''}`}>
            No images available.
          </p>
        )}
      </div>
    </div>
  );
}
