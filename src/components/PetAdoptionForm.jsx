import React from "react";
import "/src/myApp.css"

export const PetAdoptionForm = ({formData = {}, submitedData = [], handleChange, handleSubmit, isSubmitted, errors}) => {

    return  <>
        {!isSubmitted ? (
            <div className="form-body">
        
                <div className="form">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Pet Name:
                            </label>
                            <input
                                type="text" 
                                placeholder="Pet Name"
                                name="petName"
                                value={formData.petName || ""}
                                onChange={handleChange}
                                required />

                            { errors.petName && <small>{errors.petName}</small> }

                            <label>
                                Pet Type:
                            </label>
                            <select className="type"
                                name="petType"
                                value={formData.petType || ""}
                                onChange={handleChange}
                                required
                            >
                                <option>Type</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Rabbits">Rabbits</option>
                                <option value="Birds">Birds</option>
                            </select>
                            <label>
                                Breed:
                            </label>
                            <input 
                                type="text" 
                                placeholder="Breed"
                                name="breed"
                                value={formData.breed || ""}
                                onChange={handleChange} 
                                required/>

                            { errors.breed && <small>{errors.breed}</small> }

                            <label>
                                Your Name:
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="yourName"
                                value={formData.yourName || ""}
                                onChange={handleChange}
                                required />

                            { errors.yourName && <small>{errors.yourName}</small> }

                            <label>
                                Email:
                            </label>
                            <input 
                                type="text" 
                                placeholder="Email"
                                name="email"
                                value={formData.email || ""}
                                onChange={handleChange}
                                required />

                            { errors.email && <small>{errors.email}</small> }

                            <label>
                                Phone:
                            </label>
                            <input 
                                type="number" 
                                placeholder="Phone"
                                name="phone"
                                value={formData.phone || ""}
                                onChange={handleChange}
                                required />

                            { errors.phone && <small>{errors.phone}</small> }

                            <button>Submit</button>
                        </form>
                    </div>
                </div>
                ) : (
                    <div>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Pet Name</th>
                                    <th>Pet Type</th>
                                    <th>Breed</th>
                                    <th>Adopter Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submitedData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.petName}</td>
                                        <td>{data.petType}</td>
                                        <td>{data.breed}</td>
                                        <td>{data.yourName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> )}
    
                    </>
}