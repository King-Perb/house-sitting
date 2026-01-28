import { getTranslations } from "next-intl/server";
import { Calendar, ClipboardList, CreditCard, Clock, CheckCircle, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function StepCard({
  number,
  icon: Icon,
  title,
  description,
  note,
  isLast,
}: {
  readonly number: number;
  readonly icon: typeof Calendar;
  readonly title: string;
  readonly description: string;
  readonly note: string;
  readonly isLast: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Step Number Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
        {number}
      </div>

      <Card className="h-full w-full pt-6 border border-primary/10 bg-background/90 shadow-sm">
        <CardHeader className="text-center pb-2">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
            {note}
          </span>
        </CardContent>
      </Card>

      {/* Connector Arrow (hidden on mobile and for last item) */}
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground/50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

export async function HowItWorksSection() {
  const t = await getTranslations("howItWorks");

  const steps = [
    {
      number: 1,
      icon: Calendar,
      title: t("step1.title"),
      description: t("step1.description"),
      note: t("step1.note"),
    },
    {
      number: 2,
      icon: ClipboardList,
      title: t("step2.title"),
      description: t("step2.description"),
      note: t("step2.note"),
    },
    {
      number: 3,
      icon: CreditCard,
      title: t("step3.title"),
      description: t("step3.description"),
      note: t("step3.note"),
    },
  ];

  const importantInfo = [
    {
      icon: Clock,
      title: t("goodToKnow.advanceNotice.title"),
      description: t("goodToKnow.advanceNotice.description"),
    },
    {
      icon: CheckCircle,
      title: t("goodToKnow.firstTime.title"),
      description: t("goodToKnow.firstTime.description"),
    },
    {
      icon: Info,
      title: t("goodToKnow.serviceArea.title"),
      description: t("goodToKnow.serviceArea.description"),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-muted/50"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-16 pt-4">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              note={step.note}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Important Information */}
        <div className="bg-background/95 rounded-xl p-8 border border-primary/10 shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-center">
            {t("goodToKnow.title")}
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {importantInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment & Cancellation Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>{t("payment")}</p>
          <p className="mt-2">{t("cancellation")}</p>
        </div>
      </div>
    </section>
  );
}
