/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      // Define un objeto de columnas personalizado para que sea fácil de modificar
      gridColumn: {
        'span': 'span var(--col-span)',
      },
      // Define las variables personalizadas para los tamaños de pantalla
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1536px',
      },
    },
  },
  variants: {
    extend: {
      // Habilita las variantes responsive para las clases width y gridColumn
      width: ['responsive'],
      gridColumn: ['responsive'],
    },
  },
}


