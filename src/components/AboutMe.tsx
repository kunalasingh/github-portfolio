"use client";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";
import strings from "@/constants/strings";
const aboutMe = strings.aboutMe;

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row justify-between items-baseline">
        <CardTitle>{aboutMe.aboutMe}</CardTitle>
        {isDesktopOrLaptop && <ThemeSwitcher />}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{aboutMe.summary}</p>
      </CardContent>
    </Card>
  );
};
