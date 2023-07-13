import React, { useState } from "react";
import {doc, setDoc, Timestamp } from "firebase/firestore"

const NewEntryForm = ({ entryType }) => {
    const [ formData, setFormData ] = useState({})

    //data needed
    // Start Time
    // End Time
    // Meal Boolean
    // Comments

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleChange = (e) => {
        const inputType = e.target.id
        const inputValue = e.target.value

        switch(inputType){
            case 'startTime':
                setFormData({...formData, startTime: Timestamp.fromDate(new Date(inputValue))})
                break;
            case 'endTime':
                setFormData({...formData, endTime: Timestamp.fromDate(new Date(inputValue))})
                break;
            case 'comments':
                setFormData({...formData, comments: inputValue})
                break;
            case 'fullMeal':
                setFormData({...formData, fullMeal: inputValue == 'Yes' ? true : false})
                break;
        }

        console.log(formData)
    }


  return (
    <>
      {entryType == "newMeal" ? (
        <form className="w-[25%] mx-auto">
          <label
            htmlFor="startTime"
            className="block text-xs font-medium text-teal-500"
          >
            Start Time
          </label>

          <input
            type="datetime-local"
            id="startTime"
            className="mt-1 w-full rounded-md border-teal-500 shadow-sm sm:text-sm py-2 mb-4"
            onChange={handleChange}
          />

          <label
            htmlFor="endTime"
            className="block text-xs font-medium text-teal-500"
          >
            End Time
          </label>

          <input
            type="datetime-local"
            id="endTime"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-2 mb-4"
            onChange={handleChange}
          />

          <label
            htmlFor="comments"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500 mb-4"
          >
            <input
              type="textarea"
              id="comments"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2 px-1"
              placeholder="comments"
              onChange={handleChange}
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-teal-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Comments
            </span>
          </label>

          <label
            htmlFor="fullMeal"
            className="block text-sm font-medium text-teal-500"
          >
            Was this a full meal?
          </label>

          <select
            name="fullMeal"
            id="fullMeal"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm py-2 px-1"
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      ) : (
        <h1>New Symptom</h1>
      )}
    </>
  );
};

export default NewEntryForm;
