import { DaysCounter } from "./index";

export default {
  title: "CustomeComponents/DaysCounter",
  component: DaysCounter,
  parameters: { status: { type: "beta" } },
  argTypes: {
    targetDate: {
      control: {
        type: "text",
      },
      description: "Target date in DD-MM-YYYY format",
    },
  },
};

export const main = (args: any) => <DaysCounter {...args} />;

main.args = {
  targetDate: "11-12-2024",
};
