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
					<Grid $xsCols={1} $xlCols={4}>
						<Input type="checkbox" id="check-1" $label="Checkbox" />
						<Input
							type="checkbox"
							id="check-2"
							disabled
							$label="Checkbox"
						/>
						<Input
							type="checkbox"
							id="check-3"
							$label="Checkbox"
							$success
						/>
						<Input
							type="checkbox"
							id="check-4"
							$label="Checkbox"
							$error
						/>
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Grid $xsCols={1} $xlCols={4}>
						<Input
							type="radio"
							id="radio-1"
							name="radio-1"
							$label="Radio"
						/>
						<Input
							type="radio"
							disabled
							id="radio-2"
							name="radio-1"
							$label="Radio"
						/>
						<Input
							type="radio"
							id="radio-3"
							name="radio-1"
							$label="Radio"
							$success
						/>
						<Input
							type="radio"
							id="radio-4"
							name="radio-1"
							$label="Radio"
							$error
						/>
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Grid $xsCols={1} $xlCols={4}>
						<Input placeholder="Input" $fullWidth />
						<Input placeholder="Input" disabled $fullWidth />
						<Input placeholder="Input" $success $fullWidth />
						<Input placeholder="Input" $error $fullWidth />
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Grid $xsCols={1} $xlCols={4}>
						<Input placeholder="Input" $size="big" $fullWidth />
						<Input
							placeholder="Input"
							disabled
							$size="big"
							$fullWidth
						/>
						<Input
							placeholder="Input"
							$size="big"
							$success
							$fullWidth
						/>
						<Input
							placeholder="Input"
							$size="big"
							$error
							$fullWidth
						/>
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Grid $xsCols={1} $xlCols={4}>
						<Textarea placeholder="Textarea" $fullWidth />
						<Textarea placeholder="Textarea" disabled $fullWidth />
						<Textarea
							placeholder="Textarea"
							$size="big"
							$success
							$fullWidth
						/>
						<Textarea
							placeholder="Textarea"
							$size="big"
							$error
							$fullWidth
						/>
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Grid $xsCols={1} $xlCols={4}>
						<Select
							id="select-1"
							placeholder="Input"
							$label="Select"
							$fullWidth
						>
							<option value="1">Sample</option>
						</Select>
						<Select
							id="select-2"
							placeholder="Input"
							disabled
							$label="Select"
							$fullWidth
						>
							<option value="1">Sample</option>
						</Select>
						<Select
							id="select-3"
							placeholder="Input"
							$success
							$label="Select"
							$fullWidth
						>
							<option value="1">Sample</option>
						</Select>
						<Select
							id="select-4"
							placeholder="Input"
							$error
							$label="Select"
							$fullWidth
						>
							<option value="1">Sample</option>
						</Select>
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Grid $xsCols={1} $xlCols={4}>
						<Select
							id="select-5"
							placeholder="Input"
							$size="big"
							$label="Select"
						>
							<option value="1">Sample</option>
						</Select>
						<Select
							id="select-6"
							placeholder="Input"
							disabled
							$size="big"
							$label="Select"
						>
							<option value="1">Sample</option>
						</Select>
						<Select
							id="select-7"
							placeholder="Input"
							$size="big"
							$success
							$label="Select"
						>
							<option value="1">Sample</option>
						</Select>
						<Select
							id="select-8"
							placeholder="Input"
							$size="big"
							$error
							$label="Select"
						>
							<option value="1">Sample</option>
						</Select>
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Grid $xsCols={1} $xlCols={4}>
						<Toggle placeholder="Input" />
						<Toggle placeholder="Input" disabled />
						<Toggle placeholder="Input" $success />
						<Toggle placeholder="Input" $error />
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Grid $xsCols={1} $xlCols={4}>
						<Toggle placeholder="Input" $size="big" />
						<Toggle placeholder="Input" disabled $size="big" />
						<Toggle placeholder="Input" $success $size="big" />
						<Toggle placeholder="Input" $error $size="big" />
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Grid $xsCols={1} $xlCols={4}>
						<RangeSlider placeholder="Input" />
						<RangeSlider placeholder="Input" disabled />
						<RangeSlider placeholder="Input" $success />
						<RangeSlider placeholder="Input" $error />
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Box>
					<Grid $xsCols={1} $xlCols={4}>
						<RangeSlider placeholder="Input" $size="big" />
						<RangeSlider placeholder="Input" disabled $size="big" />
						<RangeSlider placeholder="Input" $success $size="big" />
						<RangeSlider placeholder="Input" $error $size="big" />
					</Grid>
				</Box>
				<Space $xs={20} $lg={40} />
				<Grid $xsCols={3}>
					<Box>1</Box>
					<Box>2</Box>
					<Box>3</Box>
					<Col $span={3}>
						<Box>4</Box>
					</Col>
				</Grid>
				<Space $xs={20} $lg={40} />
			</Container>
		</main>
	);
}
