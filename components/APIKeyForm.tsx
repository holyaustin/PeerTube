import React from "react";

interface Props {
  setApiKey: (apiKey: string) => void;
}

const APIKeyForm: React.FC<Props> = ({ setApiKey }) => {
  const submitHandler = (event: React.SyntheticEvent) => {
    const { apiKey } = event.target as HTMLFormElement;

    setApiKey(apiKey.value);
  };

  return (
    <div  >
      <div className="text-blue-500 text-center text-3xl">
        Please Enter you livepeer API key below</div>
        <br />  
    <form
      className="px-4 h-3/5 flex justify-center flex-col lg:max-w-screen-md m-auto"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Enter your api key"
        className="border-black active:border-livepeer p-2 w-full rounded border-4"
        name="apiKey"
      />
      <label className="text-sm text-gray-400 text-right">
        Press <strong>Enter</strong> to submit
      </label>
      <div className="py-6 text-sm text-gray-800">
        Find out how to get your API key{" "}
        <a
          href="https://livepeer.com/docs/guides/api-keys/create-an-api-key"
          className="text-blue-500 underline"
        >
          here
        </a>
      </div>

      
    </form>
    </div>
  );
};

export default APIKeyForm;
