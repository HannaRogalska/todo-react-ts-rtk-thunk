
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-[30px] mb-3 ">Welcome in your todo app</h1>
      <p className="text-[18px] text-lg/9 text-shadow-xs">
        One of the most important reasons you should use a to do list is that it
        will help you stay organised. When you write all your tasks in a list,
        they seem more manageable. When you’ve got a clear outline of the tasks
        you’ve got to do and those you’ve completed, it helps you stay focused.
        While freeing up space in your mind for other more creative tasks.
      </p>
      <Button nameForButton="Go to" handlerFunction={ ()=>{navigate('/todo')} } />
    </div>
  );
};

export default HomePage;
