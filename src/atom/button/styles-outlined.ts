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
      color: {
        gradientBase: [
          // light (apply on all colors but it will override by next modes)
          'border-secondary-500',
          'text-secondary-600',
          // dark
          '',
          // hover
          'transparent',
          // active
          ''
        ],
        info: [
          // light (apply on all colors but it will override by next modes)
          'border-info-500',
          'text-info-500',
          // dark
          '',
          // hover
          'bg-info-100',
          // active
          ''
        ],

        warning: [
          // light (apply on all colors but it will override by next modes)
          'border-warning-500',
          'text-warning-500',
          // dark
          '',
          // hover
          'bg-warning-100',
          // active
          ''
        ],

        success: [
          // light (apply on all colors but it will override by next modes)
          'border-success-500 text-success-500',
          // dark
          '',
          // hover
          'bg-success-100',
          // active
          ''
        ],

        danger: [
          // light (apply on all colors but it will override by next modes)
          'border-danger-500 text-danger-500',
          // dark
          '',
          // hover
          'bg-danger-100',
          // active
          ''
        ],

        transparent: [
          // light (apply on all colors but it will override by next modes)
          'border-transport-500 text-transport-500',
          // dark
          '',
          // hover
          'bg-transport-100',
          // active
          ''
        ],

        theme: [
          // light (apply on all colors but it will override by next modes)
          'border-theme-500 text-theme-500',
          // dark
          '',
          // hover
          'bg-theme-100',
          // active
          ''
        ]
      },
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
      size: 'medium',
      color: 'gradientBase'
    }
  }
);

// this is a custom activation color for button
const styleButtonActive = cva('pointer-event-none', {
  variants: {
    color: {
      gradientBase: [
        // light
        'bg-gradient-base-600',
        // dark
        ''
      ],
      info: [
        // light
        'outline outline-info-100',
        // dark
        ''
      ],
      warning: [
        // light
        'outline outline-warning-100',
        // dark
        ''
      ],
      success: [
        // light
        'outline outline-success-100',
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
      ],
      danger: [
        // light
        'outline outline-danger-100',
        // dark
        ''
      ]
    }
  },
  defaultVariants: {
    color: 'gradientBase'
  }
});

const styleButtonLoading = cva('absolute stroke-gray-500', {
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

const buttonOutlined = {
  styleButton,
  styleButtonActive,
  styleButtonLoading
};

export default buttonOutlined;
