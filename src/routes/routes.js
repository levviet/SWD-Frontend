import configs from "@/configs";

// Layouts
// This is where you can import your layouts
// DefaultLayout is a layout that comes with the template

// Pages
import Home from "@/pages/Home";
import Appointment from "@/pages/Appointment";
import Doctors from "@/pages/Doctors";
import DoctorsDetail from "@/pages/Doctors/DoctorsDetail";
import About from "@/pages/About";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Payment from "@/pages/Payment";
import Medicines from "@/pages/Medicines";
import MedicinesDetail from "@/pages/Medicines/MedicinesDetail";

const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.appointment, component: Appointment },
    { path: configs.routes.doctors, component: Doctors },
    { path: configs.routes.doctors_detail, component: DoctorsDetail },
    { path: configs.routes.medicines, component: Medicines },
    { path: configs.routes.medicines_detail, component: MedicinesDetail },
    { path: configs.routes.payment, component: Payment },
    { path: configs.routes.about, component: About },
    { path: configs.routes.login, component: Login, layout: null },
    { path: configs.routes.register, component: Register, layout: null },
];

const privateRoutes = [];

const authenticationRoutes = [];

export { publicRoutes, privateRoutes, authenticationRoutes };