import React from "react";
import { app } from "../../firebase/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export async function getServerSideProps() {
  const db = getFirestore(app);

  const querySnapshot = await getDocs(collection(db, "PHDiary"));
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      // For those of you still dealing with this you can continue with the JSON.parse(JSON.stringify) hack or you can make sure your data consists of easily-serializable primitives.
      data: JSON.parse(JSON.stringify(doc.data())),
    };
  });

  console.log(data)

  return {
    props: { data: data },
  };
}

const index = ({data}) => {
    console.log(data.data)

  return <div>Meal Log</div>;
};

export default index;
