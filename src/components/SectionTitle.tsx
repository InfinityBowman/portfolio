import SectionDecorator from './icons/SectionDecorator';

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className={'mb-8 flex items-center gap-4'}>
      <SectionDecorator width={25} className={'animate-spin duration-7000'} title={title} />

      <h2 className={'text-xl leading-none'}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
