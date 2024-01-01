import React from "react";
import { useState } from "react";
import { Image, Text, View, TouchableOpacity, Button } from "react-native";
import DocumentScanner from "react-native-document-scanner-plugin";

const App = () => {
  const [scanDoc, setScanDoc] = useState(null);

  const scanDocument = async () => {
    const { scannedImages } = await DocumentScanner.scanDocument({
      croppedImageQuality: 100,
    });

    if (scannedImages.length > 0) {
      setScanDoc(scannedImages[0]);
    }
  };

  return (
    <>
      <Text
        style={{
          height: "100",
          width: "100%",
          padding: "10%",
          margin: "auto",
          marginTop: "20%",
          color: "white",
          backgroundColor: "#841584",
        }}
      >
        Scan Anything, Anytime, Anywhere

        Document Scanner and PDF Creator app – an Indian scanner app that pr compared to any other apps on the store.
      </Text>
      <Button
        onPress={scanDocument()}
        title="Scan Document"
        accessibilityLabel="Learn more about this purple button"
      />
      <View style={{ flex: 1 }}>
        {scanDoc != null && (
          <Image
            source={{ url: scanDoc }}
            style={{ width: "100", height: "50%" }}
          />
        )}
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: "grey",
            borderRadius: 20,
            position: "absolute",
            bottom: 20,
            alignSelf: "center",
          }}
          onPress={() => {
            scanDocument();
          }}
        ></TouchableOpacity>
      </View>
    </>
  );
};

export default App;
