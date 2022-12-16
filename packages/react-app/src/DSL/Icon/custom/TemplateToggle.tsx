import { IconProps as ChakraIconProps } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

const TemplateToggle = ({ ...rest }: ChakraIconProps) => {
  return (
    <Icon {...rest} px={0.5}>
      {/*<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
      <path d="M 2.001 17.819 L 4.002 17.819 L 4.002 19.8 L 6.003 19.8 L 6.003 21.78 L 2.001 21.78 L 2.001 17.819 Z M 6.003 17.819 L 8.004 17.819 L 8.004 19.8 L 6.003 19.8 L 6.003 17.819 Z M 4.002 15.84 L 6.003 15.84 L 6.003 17.819 L 4.002 17.819 L 4.002 15.84 Z M 8.004 15.84 L 6.003 15.84 L 6.003 11.88 L 10.005 11.88 L 10.005 13.859 L 8.004 13.859 L 8.004 15.84 Z M 8.004 15.84 L 10.005 15.84 L 10.005 13.859 L 12.006 13.859 L 12.006 17.819 L 8.004 17.819 L 8.004 15.84 Z M 10.005 9.9 L 12.006 9.9 L 12.006 11.88 L 10.005 11.88 L 10.005 9.9 Z M 12.006 11.88 L 14.007 11.88 L 14.007 13.859 L 12.006 13.859 L 12.006 11.88 Z M 12.006 7.92 L 14.007 7.92 L 14.007 9.9 L 12.006 9.9 L 12.006 7.92 Z M 14.007 9.9 L 16.008 9.9 L 16.008 11.88 L 14.007 11.88 L 14.007 9.9 Z M 14.007 5.94 L 16.008 5.94 L 16.008 7.92 L 14.007 7.92 L 14.007 5.94 Z M 16.008 3.959 L 18.009 3.959 L 18.009 5.94 L 16.008 5.94 L 16.008 3.959 Z M 18.009 1.98 L 22.011 1.98 L 22.011 5.94 L 20.011 5.94 L 20.011 3.959 L 18.009 3.959 L 18.009 1.98 Z M 18.009 5.94 L 20.011 5.94 L 20.011 7.92 L 18.009 7.92 L 18.009 5.94 Z M 16.008 7.92 L 18.009 7.92 L 18.009 9.9 L 16.008 9.9 L 16.008 7.92 Z M 4.002 7.92 L 6.003 7.92 L 6.003 11.88 L 4.002 11.88 L 4.002 7.92 Z M 12.006 17.819 L 16.008 17.819 L 16.008 19.8 L 12.006 19.8 L 12.006 17.819 Z" />
      {/*</svg>*/}
    </Icon>
  );
};

export default TemplateToggle;
