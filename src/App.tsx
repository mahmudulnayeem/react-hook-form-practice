import { useState } from "react";
import FormValues from "./components/FormValues";
import YoutubeForm, { formValues } from "./components/YoutubeForm";


function App() {
  const [formData, setData] = useState<formValues | object>({});
  const onSubmit = (data: formValues) => {
    setData(data)
  }
  return (
    <div className="bg-gray-100 flex flex-col sm:flex-row">
      <YoutubeForm onSubmit={onSubmit} />
      <FormValues data={formData} />
    </div>
  )
}

export default App
