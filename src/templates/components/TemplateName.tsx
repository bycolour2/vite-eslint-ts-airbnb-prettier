import { FC } from 'react';

interface ITemplateNameProps {
  children?: React.ReactNode;
}

export const TemplateName: FC<ITemplateNameProps> = () => {
  return (
    <div data-testid="TemplateNameId">
      <h1>TemplateName component</h1>
    </div>
  );
};

export default TemplateName;
