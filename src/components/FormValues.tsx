import { formValues } from "./YoutubeForm"

const FormValues = ({ data }: { data: formValues | object }) => {
    return (
        <div className="sm:w-1/2 border-2 border-red-500 m-3 p-5 rounded-md bg-white">
            <h1 className="text-center text-lg font-bold text-red-600">FormValues</h1>
            {
                Object.keys(data).length === 0 ? <p className="text-center text-orange-500">
                    Please fill the form and submit
                </p> : <pre>{JSON.stringify(data, null, 2)}</pre>
            }

        </div>
    )
}

export default FormValues