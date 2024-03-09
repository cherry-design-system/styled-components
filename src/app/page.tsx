import React from "react";
import type { Metadata } from "next";
import { Container } from "@/app/components/cherry/container";
import { Flex } from "@/app/components/cherry/flex";
import { Button } from "@/app/components/cherry/button";
import { Input } from "@/app/components/cherry/input";
import { Textarea } from "@/app/components/cherry/textarea";
import { Select } from "@/app/components/cherry/select";
import { Toggle } from "@/app/components/cherry/toggle";
import { RangeSlider } from "@/app/components/cherry/range-slider";
import { Space } from "@/app/components/cherry/space";
import { Box } from "@/app/components/cherry/box";
import { Grid } from "@/app/components/cherry/grid";
import { Col } from "@/app/components/cherry/col";

export const metadata: Metadata = {
	title: "Cherry",
	description: "Design System",
};

export default function Home() {
	return (
		<main>
			<Container>
				<Box>
					<Flex>
						<Button>Button</Button>
						<Button $variant="secondary">Button</Button>
						<Button $variant="tertiary">Button</Button>
						<Button disabled>Button</Button>
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
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
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
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
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
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
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Button $fullWidth>Button</Button>
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Input type="checkbox" $label="Checkbox" />
						<Input type="checkbox" $label="Checkbox" disabled />
						<Input type="checkbox" $label="Checkbox" $success />
						<Input type="checkbox" $label="Checkbox" $error />
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Input type="radio" $label="Radio" />
						<Input type="radio" $label="Radio" disabled />
						<Input type="radio" $label="Radio" $success />
						<Input type="radio" $label="Radio" $error />
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Input placeholder="Input" />
						<Input placeholder="Input" disabled />
						<Input placeholder="Input" $success />
						<Input placeholder="Input" $error />
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Input placeholder="Input" $label="Label" $fullWidth />
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Input placeholder="Input" $size="big" />
						<Input placeholder="Input" disabled $size="big" />
						<Input placeholder="Input" $size="big" $success />
						<Input placeholder="Input" $size="big" $error />
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Textarea placeholder="Textarea" />
						<Textarea placeholder="Textarea" disabled />
						<Textarea placeholder="Textarea" $size="big" $success />
						<Textarea placeholder="Textarea" $size="big" $error />
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Select placeholder="Input">
							<option value="1">Sample</option>
						</Select>
						<Select placeholder="Input" disabled>
							<option value="1">Sample</option>
						</Select>
						<Select placeholder="Input" $success>
							<option value="1">Sample</option>
						</Select>
						<Select placeholder="Input" $error>
							<option value="1">Sample</option>
						</Select>
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Select placeholder="Input" $size="big">
							<option value="1">Sample</option>
						</Select>
						<Select placeholder="Input" disabled $size="big">
							<option value="1">Sample</option>
						</Select>
						<Select placeholder="Input" $size="big" $success>
							<option value="1">Sample</option>
						</Select>
						<Select placeholder="Input" $size="big" $error>
							<option value="1">Sample</option>
						</Select>
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Toggle placeholder="Input" />
						<Toggle placeholder="Input" disabled />
						<Toggle placeholder="Input" $success />
						<Toggle placeholder="Input" $error />
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<Toggle placeholder="Input" $size="big" />
						<Toggle placeholder="Input" disabled $size="big" />
						<Toggle placeholder="Input" $success $size="big" />
						<Toggle placeholder="Input" $error $size="big" />
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<RangeSlider placeholder="Input" />
						<RangeSlider placeholder="Input" disabled />
						<RangeSlider placeholder="Input" $success />
						<RangeSlider placeholder="Input" $error />
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Flex>
						<RangeSlider placeholder="Input" $size="big" />
						<RangeSlider placeholder="Input" disabled $size="big" />
						<RangeSlider placeholder="Input" $success $size="big" />
						<RangeSlider placeholder="Input" $error $size="big" />
					</Flex>
				</Box>
				<Space $xs={20} $lg={40} />
				<Grid $xsCols={2}>
					<Box>1</Box>
					<Box>2</Box>
					<Col $span={2}>
						<Box>3</Box>
					</Col>
				</Grid>
				<Space $xs={20} $lg={40} />
			</Container>
		</main>
	);
}
