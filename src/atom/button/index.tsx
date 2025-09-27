'use client';
import { twMerge } from 'tailwind-merge';
import AnimatedSpinner from '../loaders/spinner';
import buttonBasic from './styles-basic';
import noStyleButton from './styles-no-style';
import buttonOutlined from './styles-outlined';
import buttonOutlineGradient from './styles-outline-gradient';
import { FC } from 'react';

const Button: FC<Atom.button> = ({
  className,
  contentClassName,
  isLoading,
  type = 'button',
  variation = 'basic',
  size = 'medium',
  color,
  children,
  disabled,
  isActive,
  ...props
}) => {
  // using variation with below approach to separate variations completely

  type collection = Atom.variantsCollection<Atom.button>;

  // generic of variation schema
  const variants: collection = {
    // using callback (cause if it runs in the object it will generate all they variation styles on each rerender)
    basic: () =>
      twMerge(
        buttonBasic.styleButton({ size, color, disabled, isLoading }),
        isActive ? buttonBasic.styleButtonActive({ color }) : ''
      ),
    noStyle: () =>
      twMerge(
        noStyleButton.styleButton({ size, color, disabled, isLoading }),
        isActive ? noStyleButton.styleButtonActive({ color }) : ''
      ),
    outline: () =>
      twMerge(
        buttonOutlined.styleButton({ size, color, disabled, isLoading }),
        isActive ? buttonOutlined.styleButtonActive({ color }) : ''
      ),
    outlineGradient: () =>
      twMerge(
        buttonOutlineGradient.styleButton({ size, disabled, isLoading }),
        isActive ? buttonOutlineGradient.styleButtonActive({}) : ''
      )
  };

  const variantsLoading: collection = {
    basic: () => buttonBasic.styleButtonLoading({ color }),
    noStyle: () => noStyleButton.styleButtonLoading({ color }),
    outline: () => buttonOutlined.styleButtonLoading({ color }),
    outlineGradient: () => buttonOutlineGradient.styleButtonLoading({})
  };

  return (
    <button type={type} className={twMerge(variants[variation](), className)} {...props}>
      <div
        className={`flex items-center justify-center h-full w-full ${twMerge(isLoading ? 'opacity-0' : '', contentClassName)}`}
        // style={{
        //   lineHeight: '0.5rem'
        // }}
      >
        {children}
      </div>

      {isLoading && <AnimatedSpinner className={variantsLoading[variation]()} />}
    </button>
  );
};

export default Button;
