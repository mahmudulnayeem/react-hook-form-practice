import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'

type Social = {
    facebook: string
    twitter: string
}
type formValues = {
    name: string
    email: string
    channel: string
    social: Social
    phoneNumbers: string[]
}


const YoutubeForm = () => {
    const { register, control, handleSubmit, formState } = useForm<formValues>({
        defaultValues: {
            name: 'nayeem',
            email: 'admin@example.com',
            channel: 'ytchannal',
            social: {
                facebook: '',
                twitter: ''
            },
            phoneNumbers: ['', '']
        }
    })
    const { errors } = formState

    const onSubmit = (data: formValues) => {
        console.log(data)
    }
    return (
        <div className="w-1/2 border-2 border-red-500 m-3 p-5 rounded-md">
            <h1 className="text-center text-lg font-bold text-red-600">Youtube Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col mt-3">
                    <label htmlFor="name">Username</label>
                    <input type="text" className="px-3 py-2 border-2 border-red-400 focus:outline-none rounded-md " id="name"
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                        })}
                    />
                    <p className='text-red-500'>{errors.name?.message}</p>
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="px-3 py-2 border-2 border-red-400 focus:outline-none rounded-md " id="email"
                        {...register('email', {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                            ,
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            validate: {
                                notAdmin: (fieldValue) => {
                                    return (
                                        fieldValue !== 'admin@example.com' || 'Try another email address'
                                    )
                                },
                                notBlacklisted: (fieldValue) => {
                                    return (
                                        !fieldValue.endsWith('.xyz') || 'This domain is not allowed'
                                    )
                                }
                            }
                        })} />
                    <p className='text-red-500'>{errors.email?.message}</p>
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" className="px-3 py-2 border-2 border-red-400 focus:outline-none rounded-md " id="channel"
                        {...register('channel', {
                            required: {
                                value: true,
                                message: 'Channel is required'
                            }
                        })} />
                    <p className='text-red-500'>{errors.channel?.message}</p>
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" className="px-3 py-2 border-2 border-red-400 focus:outline-none rounded-md " id="facebook"
                        {...register('social.facebook', {
                            required: {
                                value: true,
                                message: "facebook is required"
                            }
                        })} />
                    <p className='text-red-500'>{errors.social?.facebook?.message}</p>
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" className="px-3 py-2 border-2 border-red-400 focus:outline-none rounded-md " id="twitter"
                        {...register('social.twitter', {
                            required: {
                                value: true,
                                message: 'twitter is required'
                            }
                        })} />
                    <p className='text-red-500'>{errors.social?.twitter?.message}</p>
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor="primary-phone">Primary phone number</label>
                    <input type="text" className="px-3 py-2 border-2 border-red-400 focus:outline-none rounded-md " id="primary-phone"
                        {...register('phoneNumbers.0', {
                            required: {
                                value: true,
                                message: "Primary phone number is required"
                            }
                        })} />
                    <p className='text-red-500'>{errors.phoneNumbers?.[0]?.message}</p>
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor="secondary-phone">Secondary phone number</label>
                    <input type="text" className="px-3 py-2 border-2 border-red-400 focus:outline-none rounded-md " id="secondary-phone"
                        {...register('phoneNumbers.1')} />

                </div>
                <button type="submit" className="px-5 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md mt-6 ">Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default YoutubeForm