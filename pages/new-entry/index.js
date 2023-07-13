import React from "react";
import NewEntryForm from "../../components/NewEntryForm/NewEntryForm";

const index = () => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <NewEntryForm entryType={"newMeal"} />
      </section>
    </>
  );
};

export default index;
