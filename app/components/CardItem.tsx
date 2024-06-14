import { Avatar, Badge, Card } from "flowbite-react";

export function CardItem() {
  return (
    <Card className="max-w-sm" imgSrc="/images/1.png" horizontal>
      <div className="flex gap-10">
        <p className="text-xs mt-1">Publié le 15/06/2024</p>
        <Badge color="info">Default</Badge>
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:cursor-pointer">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="flex gap-5">
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="avatar of Jese"
          rounded
        />
        <div className="flex-col">
          <span className="font-semibold">Bilal</span>
          <p className="text-xs mt-1 flex justify-start">
            Créateur de NextBlog
          </p>
        </div>
      </div>
    </Card>
  );
}
