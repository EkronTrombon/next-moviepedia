import { Nunito } from 'next/font/google'
import localFont from 'next/font/local'

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  style: ['normal', 'italic'],
});

export const sansation = localFont({
    src: [
        {
        path: '../public/fonts/Sansation-Light.ttf',
        weight: '300',
        style: 'normal',
        },
        {
        path: '../public/fonts/Sansation-LightItalic.ttf',
        weight: '300',
        style: 'italic',
        },
        {
        path: '../public/fonts/Sansation-Regular.ttf',
        weight: '400',
        style: 'normal',
        },
        {
        path: '../public/fonts/Sansation-Italic.ttf',
        weight: '400',
        style: 'italic',
        },
        {
        path: '../public/fonts/Sansation-Bold.ttf',
        weight: '700',
        style: 'normal',
        },
        {
        path: '../public/fonts/Sansation-BoldItalic.ttf',
        weight: '700',
        style: 'italic',
        }
    ],
    variable: '--font-sansation',
    display: 'swap',
});