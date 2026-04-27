export interface TemplateNameProps {
  className?: string;
}

export const TemplateName = (props: TemplateNameProps) => {
  const { className } = props;

  return (
    <div className={className} data-component="template-name">
      templateName
    </div>
  );
};
