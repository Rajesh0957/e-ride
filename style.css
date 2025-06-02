/* Reset and base */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #0a0f2c, #1b1f4c);
  color: white;
  height: 100%;
  overflow: hidden;
}

.screen {
  display: none;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #0f1a3a, #233e7d);
  overflow-y: auto;
}

.screen.active {
  display: block;
  animation: fadeIn 0.7s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Shared Components */
.screen-header {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(255,255,255,0.1);
  padding-bottom: 10px;
}

.screen-content p {
  margin: 10px 0;
  font-size: 18px;
}

button {
  padding: 12px 24px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #007bff, #00c6ff);
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.05);
}

/* Entry Screen */
.entry-container {
  text-align: center;
  margin-top: 15vh;
}

.entry-container .logo {
  width: 120px;
  margin-bottom: 20px;
}

.entry-container h1 {
  font-size: 32px;
  margin: 10px 0;
}

.entry-container p {
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: 30px;
}

/* Login Screen */
.login-container {
  max-width: 300px;
  margin: 15vh auto;
  text-align: center;
}

.login-container input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}

/* Home Screen */
.home-container {
  text-align: center;
  padding-top: 40px;
}

.home-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 30px;
}

.home-buttons button {
  width: 100%;
}

/* Trips Screen */
.trips-screen {
  padding: 10px 16px;
}

.search-container {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
}

.section-label {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 10px;
}

.trip-card {
  display: flex;
  align-items: center;
  background-color: rgba(255,255,255,0.05);
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.trip-card .icon {
  font-size: 24px;
  margin-right: 12px;
}

.trip-info .trip-title {
  font-size: 16px;
  font-weight: 600;
}

.trip-info .trip-subtitle {
  font-size: 14px;
  color: #ccc;
}

/* Profile Screen */
.profile {
  text-align: center;
  margin-top: 16px;
}

.profile img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.profile h2 {
  margin: 12px 0 4px;
  font-size: 18px;
  font-weight: 600;
}

.profile p {
  color: #aaa;
  font-size: 14px;
  margin: 0;
}

.section-title {
  font-weight: 600;
  font-size: 15px;
  padding: 20px 16px 6px;
  color: #fff;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #333;
  cursor: pointer;
}

.menu-item span {
  font-size: 14px;
}

.menu-item .arrow {
  font-size: 18px;
  color: #888;
}

/* Settings Screen */
.top-bar h1 {
  text-align: center;
  padding: 20px 0 10px;
  font-size: 22px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.section {
  margin: 20px;
}

.section h2 {
  font-size: 16px;
  margin-bottom: 12px;
}

.settings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.05);
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.settings-item .label-group {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  font-weight: 600;
}

.value {
  font-size: 13px;
  color: #ccc;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

/* Bottom Navigation */
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #1e1e1e;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #333;
  z-index: 1000;
}

.bottom-nav .nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #aaa;
}

.bottom-nav .nav-item.active {
  color: white;
}

.bottom-nav .nav-item i {
  font-size: 20px;
  margin-bottom: 4px;
}

.bottom-nav button {
  background: none;
  border: none;
}

/* Contact Screen */
#contact .screen-content p {
  font-size: 16px;
  margin: 8px 0;
}

/* Responsive */
@media (max-width: 600px) {
  .home-buttons {
    grid-template-columns: 1fr;
  }
}
