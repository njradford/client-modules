/* eslint-disable local-rules/gamut-import-paths */
import {
  Box,
  Checkbox,
  CheckboxProps,
  Column,
  FormGroup,
  LayoutGrid,
  SelectDropdown,
} from '@codecademy/gamut/src';
import { Background, ColorMode } from '@codecademy/gamut-styles/src';
import React, { ChangeEvent, useState } from 'react';

import { ColorModeExampleWrapper } from '../../Foundations/ColorMode/examples';

type CustomCheckboxProps = Omit<CheckboxProps, 'checked'> & {
  defaultChecked?: boolean;
  errorMessage?: string;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  htmlFor,
  label,
  defaultChecked = false,
  errorMessage,
  disabled,
  ...rest
}) => {
  const [currentChecked, setCurrentChecked] = useState(defaultChecked);

  const changeHandler = (event: ChangeEvent<HTMLElement>) => {
    setCurrentChecked(!currentChecked);
  };

  return (
    <FormGroup htmlFor={htmlFor} error={errorMessage} disabled={disabled}>
      <Checkbox
        htmlFor={htmlFor}
        onChange={changeHandler}
        label={label}
        disabled={disabled}
        checked={currentChecked}
        {...rest}
      />
    </FormGroup>
  );
};

export const CheckboxExample: React.FC = () => {
  return (
    <ColorMode mode="light">
      <Box bg="background" border={1} p={16}>
        <LayoutGrid>
          <Column size={4}>
            <CustomCheckbox
              htmlFor="a custom checkbox"
              label="a fancy custom checkbox made with the example below, isn't it so so nice?"
              multiline
            />
          </Column>
          <Column size={4}>
            <CustomCheckbox
              htmlFor="a custom checkbox again"
              label="disabled custom checkbox"
              defaultChecked
              disabled
            />
          </Column>
          <Column size={4}>
            <Background bg="black" pl={8}>
              <CustomCheckbox
                htmlFor="a custom checkbox the third"
                label="a dark mode fancy checkbox"
              />
            </Background>
          </Column>
        </LayoutGrid>
      </Box>
    </ColorMode>
  );
};

export const SelectDropdownExample: React.FC = () => {
  return (
    <ColorModeExampleWrapper>
      <Box height="25rem">
        <FormGroup label="i have a fancy colormode" htmlFor="colormode">
          <SelectDropdown
            aria-label="colormode"
            options={['ooo fancy', 'yes I am!', ':)']}
            name="colormode"
            isSearchable
          />
        </FormGroup>
        <FormGroup
          label="i have an error"
          htmlFor="colormode-error"
          error="cry cry cry"
        >
          <SelectDropdown
            aria-label="colormode-error"
            options={['ooo fancy', 'yes I am!', ':)']}
            name="colormode-error"
            isSearchable
            error
          />
        </FormGroup>
        <FormGroup label="i am disabled" htmlFor="colormode-disabled">
          <SelectDropdown
            aria-label="colormode-disabled"
            options={['ooo fancy', 'yes I am!', ':)']}
            name="colormode-disabled"
            isSearchable
            disabled
          />
        </FormGroup>
        <FormGroup label="i am smol" htmlFor="colormode-small">
          <SelectDropdown
            aria-label="colormode-small"
            options={['small', 'yes', 'very very']}
            size="small"
            name="colormode-small"
            isSearchable
          />
        </FormGroup>
      </Box>
    </ColorModeExampleWrapper>
  );
};
