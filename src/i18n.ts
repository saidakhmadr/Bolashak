import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      signin: {
        title: 'Welcome Back',
        subtitle: 'Sign in to your account',
        email: 'Email address',
        password: 'Password',
        button: 'Sign In',
        loading: 'Signing In...',
        no_account: "Don't have an account?",
        signup_link: 'Sign Up',
        invalid_credentials: 'Invalid credentials',
      },
      signup: {
        title: 'Create Account',
        subtitle: 'Sign up to get started',
        name: 'Full Name',
        email: 'Email address',
        password: 'Password',
        confirm: 'Confirm Password',
        button: 'Sign Up',
        loading: 'Signing Up...',
        have_account: 'Already have an account?',
        signin_link: 'Sign In',
      },
    },
  },
  ru: {
    translation: {
      signin: {
        title: 'С возвращением',
        subtitle: 'Войдите в свой аккаунт',
        email: 'Электронная почта',
        password: 'Пароль',
        button: 'Войти',
        loading: 'Вход...',
        no_account: 'Нет аккаунта?',
        signup_link: 'Зарегистрироваться',
        invalid_credentials: 'Неверные данные для входа',
      },
      signup: {
        title: 'Создать аккаунт',
        subtitle: 'Зарегистрируйтесь, чтобы начать',
        name: 'Полное имя',
        email: 'Электронная почта',
        password: 'Пароль',
        confirm: 'Подтвердите пароль',
        button: 'Зарегистрироваться',
        loading: 'Регистрация...',
        have_account: 'Уже есть аккаунт?',
        signin_link: 'Войти',
      },
    },
  },
  kk: {
    translation: {
      signin: {
        title: 'Қош келдіңіз',
        subtitle: 'Аккаунтыңызға кіріңіз',
        email: 'Электрондық пошта',
        password: 'Құпия сөз',
        button: 'Кіру',
        loading: 'Кіріп жатыр...',
        no_account: 'Аккаунтыңыз жоқ па?',
        signup_link: 'Тіркелу',
        invalid_credentials: 'Қате логин немесе құпия сөз',
      },
      signup: {
        title: 'Аккаунт құру',
        subtitle: 'Бастау үшін тіркеліңіз',
        name: 'Толық аты-жөніңіз',
        email: 'Электрондық пошта',
        password: 'Құпия сөз',
        confirm: 'Құпия сөзді растау',
        button: 'Тіркелу',
        loading: 'Тіркелуде...',
        have_account: 'Аккаунтыңыз бар ма?',
        signin_link: 'Кіру',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n; 