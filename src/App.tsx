import {
  Container,
  Button,
  Col,
  Flex,
  Grid,
  Input,
  MaxWidth,
  Range,
  Select,
  Space,
  Textarea,
  Toggle,
} from "./lib";
import { ToggleTheme } from "./toggle-theme";

function App() {
  return (
    <Container>
      <Space $size={100} />
      <MaxWidth $xs={845}>
        <ToggleTheme />
        <hr />
        <Grid $xsCols={1} $lgCols={3} $gap={20}>
          <Col $xsSpan={1} $lgSpan={2}>
            <Grid $xsCols={1} $lgCols={2} $gap={20}>
              <Input placeholder="Placeholder" $fullWidth $label="Input" id="input-1" />
              <Select $fullWidth $label="Select" id="select-1">
                <option>Select</option>
              </Select>
              <Col $lgSpan={2}>
                <Flex $xsGap={10} $lgGap={20} $wrap="nowrap" $justifyContent="space-between">
                  <Input type="checkbox" id="checkbox-1" />
                  <Input type="checkbox" id="checkbox-2" defaultChecked />
                  <Input type="radio" id="radio-2" name="demo-radio" />
                  <Input type="radio" id="radio-3" name="demo-radio" defaultChecked />
                  <Range />
                  <Toggle />
                  <Toggle defaultChecked />
                </Flex>
              </Col>
            </Grid>
          </Col>
          <Textarea $label="Textarea" $fullWidth defaultValue="Textarea" id="textarea-1" />
        </Grid>
        <Space $size={20} />
        <Grid $xsCols={1} $lgCols={2} $gap={20}>
          <Col>
            <Flex $wrap="nowrap" $gap={20}>
              <Button $fullWidth>Button</Button>
              <Button $variant="secondary" $fullWidth>
                Button
              </Button>
              <Button $variant="tertiary" $fullWidth>
                Button
              </Button>
            </Flex>
          </Col>
          <Col>
            <Flex $wrap="nowrap" $gap={20}>
              <Button $outline $fullWidth>
                Button
              </Button>
              <Button $variant="secondary" $outline $fullWidth>
                Button
              </Button>
              <Button $variant="tertiary" $outline $fullWidth>
                Button
              </Button>
            </Flex>
          </Col>
        </Grid>
      </MaxWidth>
      <Space $size={100} />
    </Container>
  );
}

export default App;
