import { useState } from "react";
import Buttons from "../../components/button/Buttons";
import { Container } from "../../components/container/Container";
import { useShoppingcartContext } from "../../context/ShopingCartContext";

export const Login = () => {
  const { handleLogin, handleLogout } = useShoppingcartContext();
  
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <Container>
      <div className="w-full h-180 flex justify-center items-center mt-10 rounded-2xl">
        <form
          action=""
          className=" rounded-2xl w-100 h-120 flex flex-col justify-center items-center shadow-2xl bg-white mt-10 p-5"
        >
          <h1 className="text-center text-6xl font-bold mb-9 text-gray-400">
            Login
          </h1>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5 my-8 items-center">
              <input
                onChange={handleChange}
                type="text"
                className="border w-full rounded-2xl text-gray-500 px-3 py-1"
                placeholder="Username..."
                name="username"
                value={user.username}
              />
              <input
                onChange={handleChange}
                type="password"
                className="border w-full rounded-2xl text-gray-500 px-3 py-1"
                placeholder="password..."
                name="password"
                value={user.password}
              />
            </div>
            <div className="flex justify-between gap-2">
              <Buttons
                type="button"
                onClick={() => {
                  handleLogin(user.username, user.password);
                }}
                variant="success"
                className="w-full py-2 rounded-2xl shadow cursor-pointer"
              >
                Login
              </Buttons>
              <Buttons
                type="button"
                onClick={handleLogout}
                variant="danger"
                className="w-full py-2 rounded-2xl shadow cursor-pointer"
              >
                Logout
              </Buttons>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};
