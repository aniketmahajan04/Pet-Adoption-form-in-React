
import Header from './components/Header'
import "./myApp.css"
import { PetAdoptionForm } from './components/PetAdoptionForm'
import { useAdopterData } from './components/AdopterData'

const App = () => {
  const { formData, submitedData, handleChange, handleSubmit, isSubmitted, errors } = useAdopterData();

  return (
    <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
      height: "100vh",
      backgroundSize: "cover"
    }}>
      <Header props={"Pet Adoption Form"}/>
    <PetAdoptionForm 
    formData={formData}
    submitedData={submitedData}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    isSubmitted={isSubmitted}
    errors={errors} />
    </div>
  )
}

export default App
