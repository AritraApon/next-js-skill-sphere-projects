import { PacmanLoader } from "react-spinners";


const loading = () => {
    return (
        <div className="flex justify-center items-center min-h-[50vh]">
<PacmanLoader

  color="#021cff"
  size={50}
/>
        </div>
    );
};

export default loading;