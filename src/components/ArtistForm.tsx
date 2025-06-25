'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// ✅ Schema with REQUIRED category/languages/image to match resolver
const schema = yup.object({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup
    .array()
    .of(yup.string().required())
    .required('Category is required')
    .min(1, 'Select at least one category'),
  languages: yup
    .array()
    .of(yup.string().required())
    .required('Languages is required')
    .min(1, 'Select at least one language'),
  fee: yup.string().required('Fee is required'),
  location: yup.string().required('Location is required'),
  image: yup
    .mixed()
    .required('Image is required')
    .test('fileSize', 'File is too large', (value) => {
      const file = (value as FileList)?.[0];
      if (!file) return true;
      return file.size <= 5 * 1024 * 1024; // 5MB
    }),
});

type ArtistFormInputs = yup.InferType<typeof schema>;

const categories = ['Singer', 'Dancer', 'Speaker', 'DJ'];
const languages = ['English', 'Hindi', 'Tamil', 'Kannada'];
const feeOptions = ['₹10k–₹20k', '₹20k–₹30k', '₹30k–₹40k'];

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArtistFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ArtistFormInputs> = (data) => {
    const submittedArtist = {
      ...data,
      id: Date.now(),
      price: data.fee,
    };

    const stored = localStorage.getItem('submittedArtists');
    const existing = stored ? JSON.parse(stored) : [];
    const updated = [...existing, submittedArtist];

    localStorage.setItem('submittedArtists', JSON.stringify(updated));
    alert('Artist submitted! Check dashboard.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input {...register('name')} className="border rounded p-2 w-full" />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Bio</label>
        <textarea {...register('bio')} className="border rounded p-2 w-full" />
        <p className="text-red-500 text-sm">{errors.bio?.message}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Categories</label>
        {categories.map((cat) => (
          <label key={cat} className="block">
            <input type="checkbox" value={cat} {...register('category')} className="mr-2" />
            {cat}
          </label>
        ))}
        <p className="text-red-500 text-sm">{errors.category?.message}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Languages Spoken</label>
        {languages.map((lang) => (
          <label key={lang} className="block">
            <input type="checkbox" value={lang} {...register('languages')} className="mr-2" />
            {lang}
          </label>
        ))}
        <p className="text-red-500 text-sm">{errors.languages?.message}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Fee Range</label>
        <select {...register('fee')} className="border rounded p-2 w-full">
          <option value="">Select Fee</option>
          {feeOptions.map((fee) => (
            <option key={fee} value={fee}>
              {fee}
            </option>
          ))}
        </select>
        <p className="text-red-500 text-sm">{errors.fee?.message}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Location</label>
        <input {...register('location')} className="border rounded p-2 w-full" />
        <p className="text-red-500 text-sm">{errors.location?.message}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Profile Image</label>
        <input type="file" {...register('image')} className="border rounded p-2 w-full" />
        <p className="text-red-500 text-sm">{errors.image?.message}</p>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
