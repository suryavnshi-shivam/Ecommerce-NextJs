import { useForm, Controller } from 'react-hook-form';

function SeparateForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email address',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <div>
            <input
              className="p-2 my-1 border border-spacing-1 border-slate-400 rounded"
              placeholder="Enter your email address"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
            {errors.email && <span className="text-red-600">{errors.email.message}</span>}
          </div>
        )}
      />
      <div className="text-end">
        <button type="submit" className="bg-slate-300 p-2 px-4 rounded">
          GET OTP
        </button>
      </div>
    </form>
  );
}

export default SeparateForm;
