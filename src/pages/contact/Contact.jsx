import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    // For now, just log the data
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 text-center font-primary">Get in touch</h2>
      <p className="text-center text-gray-500 mb-10 font-primary">Feel free to reach out for collaborations, project inquiries, or just to say hello!</p>
      <div className="max-w-md md:max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-primary mb-2" htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-primary mb-2" htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-primary mb-2" htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^\+?[0-9]{10,15}$/,
                    message: 'Enter a valid phone number'
                  }
                })}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-primary mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address'
                  }
                })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-primary mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
