import { cva } from 'class-variance-authority';

const styleButton = cva(
  [
    // layout
    'flex justify-content',
    'justify-center',
    'items-center',
    'relative',
    // detailed styling
    'font-semibold',
    'rounded-md',
    // animation
    'transition-color duration-200'
  ],
  {
    variants: {
      size: {
        xxSmall: ['p-0', 'border'],
        xSmall: ['text-xs', 'py-2', 'px-4', 'border'],
        small: ['py-3', 'px-6', 'border'],
        medium: ['text-xl', 'py-4', 'px-8', 'border-2'],
        large: ['text-2xl', 'py-5', 'px-10', 'border-2']
      },
      disabled: {
        'true':
          'cursor-not-allowed pointer-events-none opacity-50 glass-gradient-gray-md text-gray-600 border-gray-400',
        'false': ''
      },
      isLoading: {
        'true': 'cursor-not-allowed pointer-events-none opacity-50',
        'false': ''
      }
    },
    defaultVariants: {
      size: 'medium'
    }
  }
);

// this is a custom activation color for button
const styleButtonActive = cva('pointer-event-none', {
  variants: {},
  defaultVariants: {
    color: 'gradientBase'
  }
});

const styleButtonLoading = cva('absolute stroke-white', {
  variants: {
    color: {
      gradientBase: [
        // light
        '',
        // dark
        ''
      ],
      info: [
        // light
        '',
        // dark
        ''
      ],
      warning: [
        // light
        '',
        // dark
        ''
      ],
      danger: [
        // light
        '',
        // dark
        ''
      ],

      success: [
        // light
        '',
        // dark
        ''
      ],

      transparent: [
        // light
        '',
        // dark
        ''
      ],
      theme: [
        // light
        '',
        // dark
        ''
      ]
    }
  },
  defaultVariants: {
    color: 'gradientBase'
  }
});

const buttonOutlineGradient = {
  styleButton,
  styleButtonActive,
  styleButtonLoading
};

export default buttonOutlineGradient;
