import "./App.css";
import Slider from "./components/Slider";
import logo from "./assets/images/logo-199.png";
import bgForm from "./assets/images/bg-form.webp";
import tabDangNhap from "./assets/images/tab-dang-nhap.png";
import buttonLogin from "./assets/images/button-login-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import IconFB from "./assets/images/icon-fb.png";
import IconLiveChat from "./assets/images/icon-livechat.png";
import IconTele from "./assets/images/icon-tele.png";

function App() {
  const handleLoginClick = () => {
    // Set trạng thái tương tác vào localStorage
    localStorage.setItem("userInteracted", "true");
    // Chuyển hướng đến game
    window.location.href = "/games/index.html";
  };
  return (
    <>
      <div className="home-main">
        <div className="container mx-auto ">
          <div className="flex justify-center pt-[70px]">
            <img src={logo} alt="" width={135} />
          </div>

          <div className="grid grid-cols-12 gap-4 pt-[20px]">
            <div className="col-span-12 md:col-span-4 hidden md:block">
              <div className="flex justify-center">
                <Slider />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex justify-center box-login p-10 md:p-2">
                <img src={bgForm} alt="" className="h-[300px] " />
                <div className="tab-dang-nhap  ">
                  <img src={tabDangNhap} alt="" />
                </div>
                <button
                  onClick={() => handleLoginClick()}
                  className="button-login py-6 md:py-0"
                >
                  <img src={buttonLogin} alt="" />
                </button>
                <div className="logForm mt-8 md:mt-0">
                  <div class="form-group">
                    <div class="instyle">
                      <input
                        type="text"
                        class="form-control"
                        id="usrname"
                        maxlength="29"
                        name="username"
                        placeholder="Tên đăng nhập"
                        autocomplete="off"
                      />
                    </div>
                    <i class="fas fa-user"></i>
                    <FontAwesomeIcon icon={faUser} className="icon-input" />
                  </div>
                  <div class="form-group py-[25px]">
                    <div class="instyle">
                      <input
                        type="password"
                        class="form-control"
                        id="pwd"
                        maxlength="30"
                        name="password"
                        placeholder="Mật khẩu"
                        autocomplete="off"
                      />
                    </div>
                    <FontAwesomeIcon icon={faLock} className="icon-input-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 hidden md:block">
              <div className="flex flex-col justify-center items-center mx-auto gap-4 h-full">
                <img src={IconFB} alt="" width="200px" />
                <img src={IconLiveChat} alt="" width="200px" />
                <img src={IconTele} alt="" width="200px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
