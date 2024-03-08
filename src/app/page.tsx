import React from "react";
import type { Metadata } from "next";
import { Container } from "@/app/components/cherry/container";
import { Flex } from "@/app/components/cherry/Flex";
import { Button } from "@/app/components/cherry/button";
import { Input } from "@/app/components/cherry/input";
import { Textarea } from "@/app/components/cherry/textarea";
import { Select } from "@/app/components/cherry/select";
import { Toggle } from "@/app/components/cherry/toggle";
import { RangeSlider } from "@/app/components/cherry/range-slider";
import { Space } from "@/app/components/cherry/space";

export const metadata: Metadata = {
	title: "Cherry",
	description: "Design System",
};

export default function Home() {
	return (
		<main>
			<Container>
				<Flex>
					<Button>Button</Button>
					<Button $variant="secondary">Button</Button>
					<Button $variant="tertiary">Button</Button>
					<Button disabled>Button</Button>
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Button $size="big">Button</Button>
					<Button $variant="secondary" $size="big">
						Button
					</Button>
					<Button $variant="tertiary" $size="big">
						Button
					</Button>
					<Button disabled $size="big">
						Button
					</Button>
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Button $outline>Button</Button>
					<Button $variant="secondary" $outline>
						Button
					</Button>
					<Button $variant="tertiary" $outline>
						Button
					</Button>
					<Button disabled>Button</Button>
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Button $outline $size="big">
						Button
					</Button>
					<Button $variant="secondary" $outline $size="big">
						Button
					</Button>
					<Button $variant="tertiary" $outline $size="big">
						Button
					</Button>
					<Button disabled $size="big">
						Button
					</Button>
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Button $fullWidth>Button</Button>
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Input placeholder="Input" />
					<Input placeholder="Input" disabled />
					<Input placeholder="Input" $success />
					<Input placeholder="Input" $error />
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Input placeholder="Input" $size="big" />
					<Input placeholder="Input" disabled $size="big" />
					<Input placeholder="Input" $size="big" $success />
					<Input placeholder="Input" $size="big" $error />
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Textarea placeholder="Textarea" />
					<Textarea placeholder="Textarea" disabled />
					<Textarea placeholder="Textarea" $size="big" $success />
					<Textarea placeholder="Textarea" $size="big" $error />
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Select placeholder="Input" />
					<Select placeholder="Input" disabled />
					<Select placeholder="Input" $success />
					<Select placeholder="Input" $error />
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Select placeholder="Input" $size="big" />
					<Select placeholder="Input" disabled $size="big" />
					<Select placeholder="Input" $size="big" $success />
					<Select placeholder="Input" $size="big" $error />
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Toggle placeholder="Input" />
					<Toggle placeholder="Input" disabled />
					<Toggle placeholder="Input" $success />
					<Toggle placeholder="Input" $error />
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<Toggle placeholder="Input" $size="big" />
					<Toggle placeholder="Input" disabled $size="big" />
					<Toggle placeholder="Input" $success $size="big" />
					<Toggle placeholder="Input" $error $size="big" />
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<RangeSlider placeholder="Input" />
					<RangeSlider placeholder="Input" disabled />
					<RangeSlider placeholder="Input" $success />
					<RangeSlider placeholder="Input" $error />
				</Flex>
				<Space $xs={20} $lg={40} />
				<Flex>
					<RangeSlider placeholder="Input" $size="big" />
					<RangeSlider placeholder="Input" disabled $size="big" />
					<RangeSlider placeholder="Input" $success $size="big" />
					<RangeSlider placeholder="Input" $error $size="big" />
				</Flex>
				<Space $xs={20} $lg={40} />
			</Container>
		</main>
	);
}
