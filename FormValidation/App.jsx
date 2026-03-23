import { useState } from "react";

export default function App() {
  const [regform, setRegform] = useState({
    name: "",
    email: "",
    phoneno: "",
    password: "",
    gender: "",
    city: "",
    address: "",
    hobbies: [],
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (
      name === "name" ||
      name === "email" ||
      name === "phoneno" ||
      name === "password" ||
      name === "gender" ||
      name === "city" ||
      name === "address"
    ) {
      setRegform({ ...regform, [name]: value });
    } else if (name === "hobbies") {
      if (checked) {
        setRegform({ ...regform, hobbies: [...regform.hobbies, value] });
      } else {
        setRegform({
          ...regform,
          hobbies: regform.hobbies.filter((hobby) => hobby !== value),
        });
      }
    } else {
      setRegform({ ...regform, agree: checked });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!regform.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!regform.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(regform.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!regform.phoneno) {
      newErrors.phoneno = "Phone number is required";
    } else if (regform.phoneno.length !== 10) {
      newErrors.phoneno = "Phone must be 10 digits";
    }

    if (!regform.password) {
      newErrors.password = "Password is required";
    } else if (regform.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!regform.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!regform.city) {
      newErrors.city = "City is required";
    }

    if (regform.hobbies.length === 0) {
      newErrors.hobbies = "Select at least one hobby";
    }

    if (!regform.agree) {
      newErrors.agree = "You must agree before submitting";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(regform);
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:
        <input type="text" name="name" value={regform.name} onChange={handleChange}/>
        <div style={{ color: "red" }}>{errors.name}</div>

        Email:
        <input type="email" name="email" value={regform.email} onChange={handleChange}/>
        <div style={{ color: "red" }}>{errors.email}</div>

        Phone No:
        <input type="tel" name="phoneno" value={regform.phoneno} onChange={handleChange}/>
        <div style={{ color: "red" }}>{errors.phoneno}</div>

        Password:
        <input type="password" name="password" value={regform.password} onChange={handleChange}/>
        <div style={{ color: "red" }}>{errors.password}</div>

        Gender:
        <input type="radio" name="gender" value="Male" onChange={handleChange}/> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange}/> Female
        <div style={{ color: "red" }}>{errors.gender}</div>

        Select City:
        <select name="city" value={regform.city} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Morbi">Morbi</option>
          <option value="Jamnagar">Jamnagar</option>
        </select>
        <div style={{ color: "red" }}>{errors.city}</div>

        Address:
        <textarea name="address" value={regform.address} onChange={handleChange} />

        Hobbies:
        <input type="checkbox" name="hobbies" value="Reading" onChange={handleChange}/> Reading
        <input type="checkbox" name="hobbies" value="Dancing" onChange={handleChange}/> Dancing
        <input type="checkbox" name="hobbies" value="Sports" onChange={handleChange}/> Sports
        <div style={{ color: "red" }}>{errors.hobbies}</div>

        I agree:
        <input type="checkbox" name="agree" checked={regform.agree} onChange={handleChange}/>
        <div style={{ color: "red" }}>{errors.agree}</div>

        <br />
        <input type="submit" value="Register"/>
      </form>
    </div>
  );
}