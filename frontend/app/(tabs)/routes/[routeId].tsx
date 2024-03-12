import { Canvas, useThree } from "@react-three/fiber";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import Wall from "../../../threeComponents/wall";
import { useEffect, useRef, useState } from "react";
import Hold from "../../../threeComponents/hold";
import { Camera, Vector3 } from "three";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import useControls from "r3f-native-orbitcontrols";

export default function Route() {
  const [rotation, setRotation] = useState(0);
  const { routeId } = useLocalSearchParams();
  const [OrbitControls, events] = useControls();

  return (
    <View style={{ flex: 1 }} {...events}>
      {/* <Text style={{}}>Route: {routeId}</Text> */}
      {/* <Text style={{}}>Rot: {rotation}</Text> */}
      {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
      {/*   <PanGestureHandler */}
      {/*     minDist={0} */}
      {/*     onGestureEvent={(e) => setRotation(e.nativeEvent.translationX)} */}
      {/*   > */}

      <Canvas style={{ flex: 1 }}>
        <OrbitControls></OrbitControls>
        <ambientLight intensity={0.2} />
        <directionalLight color="white" position={[1, 1, 5]} intensity={1} />
        <Wall></Wall>
        <Hold position={new Vector3(0.5, -0.75, 0)}></Hold>
        <Hold position={new Vector3(0.5, -0.75, 0.5)}></Hold>
        <Hold position={new Vector3(0.5, 0, 0)}></Hold>
        <Hold position={new Vector3(0.5, 0.75, -0.5)}></Hold>
      </Canvas>
      {/*   </PanGestureHandler> */}
      {/* </GestureHandlerRootView> */}
    </View>
  );
}
