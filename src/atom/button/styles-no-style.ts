import { cva } from 'class-variance-authority';

const styleButton = cva(
  [
    // layout
    'flex justify-content justify-center items-center relative',
    // detailed styling
    '',
    // animation
    ''
  ],
  {
    variants: {
      color: {
        gradientBase: [
          // light (apply on all colors but it will override by next modes)
          '',
          // dark
          '',
          // hover
          '',
          // active
          ''
        ],
        info: [
          // light (apply on all colors but it will override by next modes)
          '',
          // dark
          '',
          // hover
          '',
          // active
          ''
        ],

        warning: [
          // light (apply on all colors but it will override by next modes)
          '',
          // dark
          '',
          // hover
          '',
          // active
          ''
        ],
        success: [
          // light (apply on all colors but it will override by next modes)
          '',
          // dark
          '',
          // hover
          '',
          // active
          ''
        ],
        danger: [
          // light (apply on all colors but it will override by next modes)
          '',
          // dark
          '',
          // hover
          '',
          // active
          ''
        ],
        transparent: [
          // light (apply on all colors but it will override by next modes)
          '',
          // dark
          '',
          // hover
          '',
          // active
          ''
        ],
        theme: [
          // light (apply on all colors but it will override by next modes)
          '',
          // dark
          '',
          // hover
          '',
          // active
          ''
        ]
      },
      size: {
        xxSmall: ['p-0'],
        xSmall: ['text-xs', 'py-1', 'px-4'],
        small: ['text-base', , 'py-2', 'px-5'],
        medium: ['text-xl', 'py-3', 'px-6'],
        large: ['text-2xl', 'py-4', 'px-8']
      },
      disabled: {
        'true': 'cursor-not-allowed pointer-events-none opacity-50 bg-gray-400 text-white',
        'false': ''
      },
      isLoading: {
        'true': 'cursor-not-allowed pointer-events-none opacity-50',
        'false': ''
      }
    },
    defaultVariants: {
      size: 'medium',
      color: 'info'
    }
  }
);

// this is a custom activation color for button
const styleButtonActive = cva('pointer-event-none', {
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
      success: [
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
      warning: [
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

const noStyleButton = {
  styleButton,
  styleButtonActive,
  styleButtonLoading
};

export default noStyleButton;
