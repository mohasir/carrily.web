import { 
  ListChecks, 
  Calculator, 
  History, 
  Tags, 
  Camera,
  Globe
} from '@lucide/astro';

export const getFeatures = (t: any) => [
  {
    title: t('features.list.smartLists'),
    description: t('features.list.smartListsDesc'),
    icon: ListChecks,
    delay: "delay-1"
  },
  {
    title: t('features.list.priceTrack'),
    description: t('features.list.priceTrackDesc'),
    icon: Calculator,
    delay: "delay-2"
  },
  {
    title: t('features.list.history'),
    description: t('features.list.historyDesc'),
    icon: History,
    delay: "delay-3"
  },
  {
    title: t('features.list.categories'),
    description: t('features.list.categoriesDesc'),
    icon: Tags,
    delay: "delay-4"
  },
  {
    title: t('features.list.offline'),
    description: t('features.list.offlineDesc'),
    icon: Globe,
    delay: "delay-5"
  },
  {
    title: t('features.list.receipts'),
    description: t('features.list.receiptsDesc'),
    icon: Camera,
    delay: "delay-6"
  }
];
