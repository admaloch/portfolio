interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <div className="flex flex-col mt-5 items-center gap-4 md:flex-row md:justify-center md:gap-8">
        <div className="flex-1 space-y-4 text-center">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl capitalize ">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
      <hr className="my-6" />
    </>
  );
}
