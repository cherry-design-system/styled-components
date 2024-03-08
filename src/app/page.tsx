import React from "react";
import type { Metadata } from "next";
import { Container } from "@/app/components/cherry/container";
import { Button } from "@/app/components/cherry/button";
import { Input } from "@/app/components/cherry/input";
import { RangeSlider } from "@/app/components/cherry/range-slider";
import { Textarea } from "@/app/components/cherry/textarea";
import { Select } from "./components/cherry/select";

export const metadata: Metadata = {
	title: "Cherry",
	description: "Design System",
};

export default function Home() {
	return (
		<main>
			<Container>
				<Select>
					<option value="1">Test 1</option>
					<option value="2">Test 2</option>
					<option value="3">Test 3</option>
				</Select>
				<br />
				<br />
				<Textarea>Test</Textarea>
				<br />
				<br />
				<RangeSlider $fullWidth />
				<br />
				<br />
				<RangeSlider disabled />
				<br />
				<br />
				<RangeSlider $size="big" />
				<br />
				<br />
				<Input
					type="radio"
					$label="Test"
					id="radio-1"
					name="radio"
					$error
				/>
				<br />
				<br />
				<Input
					type="radio"
					$label="Test"
					id="radio-2"
					name="radio"
					$size="big"
				/>
				<br />
				<br />
				<Input
					type="checkbox"
					$label="Test"
					id="checkbox-1"
					name="checkbox-1"
				/>
				<br />
				<br />
				<Input
					type="checkbox"
					$label="Test"
					id="checkbox-2"
					name="checkbox-2"
					$size="big"
				/>
				<br />
				<br />
				<Input type="text" $label="Hello" />
				<br />
				<br />
				<Input type="text" />
				<br />
				<br />
				<Input type="text" disabled $fullWidth $label="Disabled" />
				<br />
				<br />
				<Button>Button</Button>
				<br />
				<br />
				<Button $outline>Button</Button>
				<br />
				<br />
				<Button $variant="secondary">Button</Button>
				<br />
				<br />
				<Button $variant="secondary" $outline>
					Button
				</Button>
				<br />
				<br />
				<Button $variant="tertiary">Button</Button>
				<br />
				<br />
				<Button $variant="tertiary" $outline>
					Button
				</Button>
				<br />
				<br />
				<Button $variant="tertiary" $outline disabled>
					Button
				</Button>
				<br />
				<br />
			</Container>
		</main>
	);
}
