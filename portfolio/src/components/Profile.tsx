import { socialLinks } from '@/constants';
import { Button } from './ui/button';

export default function Profile() {
  return (
    <aside
      className="max-w-3xl border m-6 border-neutral-600 bg-neutral-900
     text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:2-96"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-x-10">
          <h1 className="text-3xl font-bold"> Carlos Gómez</h1>
          <p className="text-sm">Frontedn Developer</p>
        </div>

        <img src="./images/avatar.jpg" alt="avatar" className="lg:w-96 rounded-2xl object-cover" />

        <div className="mt-6">
          <p className="text-sm text-neutral-300 ">Specialization:</p>
          <p className="text-lg capitalize">Frontend developer</p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-neutral-300 ">Based in:</p>
          <p className="text-lg capitalize">Madrid, Spain</p>
        </div>

        <div className="flex gap-3 pt-2 text-neutral-500">
          {socialLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={i}
                href={link.link}
                className="hover:text-primar border-2 border-neutral-500 
                rounded-full hover:border-primary p-2 transition duration-200"
              >
                <Icon className="size-6" />
              </a>
            );
          })}
        </div>

        <Button className="mt-2" size="lg">
          <a href="#contact"> Let's work</a>
        </Button>
      </div>
    </aside>
  );
}
