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
        <Input $fullWidth $label="Input" id="data-1" type="date" />
        <Space $size={20} />
        <Grid $xsCols={1} $lgCols={3} $gap={20}>
          <Col $xsSpan={1} $lgSpan={2}>
            <Grid $xsCols={1} $lgCols={2} $gap={20}>
              <Input
                placeholder="Placeholder"
                $fullWidth
                $label="Input"
                id="input-1"
              />
              <Select $fullWidth $label="Select" id="select-1">
                <option>Select</option>
              </Select>
              <Col $lgSpan={2}>
                <Flex
                  $xsGap={10}
                  $lgGap={20}
                  $wrap="nowrap"
                  $justifyContent="space-between"
                >
                  <Input type="checkbox" id="checkbox-1" />
                  <Input type="checkbox" id="checkbox-2" defaultChecked />
                  <Input type="radio" id="radio-2" name="demo-radio" />
                  <Input
                    type="radio"
                    id="radio-3"
                    name="demo-radio"
                    defaultChecked
                  />
                  <Range />
                  <Toggle />
                  <Toggle defaultChecked />
                </Flex>
              </Col>
            </Grid>
          </Col>
          <Textarea
            $label="Textarea"
            $fullWidth
            defaultValue="Textarea"
            id="textarea-1"
          />
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

        <Space $size={40} />
        <hr />
        <Space $size={20} />

        {/* Big Size */}
        <h2>Big</h2>
        <Space $size={10} />
        <Input
          $size="big"
          $fullWidth
          $label="Input Big"
          id="date-big"
          type="date"
        />
        <Space $size={20} />
        <Grid $xsCols={1} $lgCols={3} $gap={20}>
          <Col $xsSpan={1} $lgSpan={2}>
            <Grid $xsCols={1} $lgCols={2} $gap={20}>
              <Input
                $size="big"
                placeholder="Placeholder"
                $fullWidth
                $label="Input Big"
                id="input-big"
              />
              <Select $size="big" $fullWidth $label="Select Big" id="select-big">
                <option>Select</option>
              </Select>
              <Col $lgSpan={2}>
                <Flex
                  $xsGap={10}
                  $lgGap={20}
                  $wrap="nowrap"
                  $justifyContent="space-between"
                >
                  <Input $size="big" type="checkbox" id="checkbox-big-1" />
                  <Input
                    $size="big"
                    type="checkbox"
                    id="checkbox-big-2"
                    defaultChecked
                  />
                  <Input
                    $size="big"
                    type="radio"
                    id="radio-big-1"
                    name="demo-radio-big"
                  />
                  <Input
                    $size="big"
                    type="radio"
                    id="radio-big-2"
                    name="demo-radio-big"
                    defaultChecked
                  />
                  <Range $size="big" />
                  <Toggle $size="big" />
                  <Toggle $size="big" defaultChecked />
                </Flex>
              </Col>
            </Grid>
          </Col>
          <Textarea
            $size="big"
            $label="Textarea Big"
            $fullWidth
            defaultValue="Textarea"
            id="textarea-big"
          />
        </Grid>
        <Space $size={20} />
        <Grid $xsCols={1} $lgCols={2} $gap={20}>
          <Col>
            <Flex $wrap="nowrap" $gap={20}>
              <Button $size="big" $fullWidth>
                Button
              </Button>
              <Button $size="big" $variant="secondary" $fullWidth>
                Button
              </Button>
              <Button $size="big" $variant="tertiary" $fullWidth>
                Button
              </Button>
            </Flex>
          </Col>
          <Col>
            <Flex $wrap="nowrap" $gap={20}>
              <Button $size="big" $outline $fullWidth>
                Button
              </Button>
              <Button $size="big" $variant="secondary" $outline $fullWidth>
                Button
              </Button>
              <Button $size="big" $variant="tertiary" $outline $fullWidth>
                Button
              </Button>
            </Flex>
          </Col>
        </Grid>

        <Space $size={40} />
        <hr />
        <Space $size={20} />

        {/* Small Size */}
        <h2>Small</h2>
        <Space $size={10} />
        <Input
          $size="small"
          $fullWidth
          $label="Input Small"
          id="date-small"
          type="date"
        />
        <Space $size={20} />
        <Grid $xsCols={1} $lgCols={3} $gap={20}>
          <Col $xsSpan={1} $lgSpan={2}>
            <Grid $xsCols={1} $lgCols={2} $gap={20}>
              <Input
                $size="small"
                placeholder="Placeholder"
                $fullWidth
                $label="Input Small"
                id="input-small"
              />
              <Select
                $size="small"
                $fullWidth
                $label="Select Small"
                id="select-small"
              >
                <option>Select</option>
              </Select>
              <Col $lgSpan={2}>
                <Flex
                  $xsGap={10}
                  $lgGap={20}
                  $wrap="nowrap"
                  $justifyContent="space-between"
                >
                  <Input $size="small" type="checkbox" id="checkbox-small-1" />
                  <Input
                    $size="small"
                    type="checkbox"
                    id="checkbox-small-2"
                    defaultChecked
                  />
                  <Input
                    $size="small"
                    type="radio"
                    id="radio-small-1"
                    name="demo-radio-small"
                  />
                  <Input
                    $size="small"
                    type="radio"
                    id="radio-small-2"
                    name="demo-radio-small"
                    defaultChecked
                  />
                  <Range $size="small" />
                  <Toggle $size="small" />
                  <Toggle $size="small" defaultChecked />
                </Flex>
              </Col>
            </Grid>
          </Col>
          <Textarea
            $size="small"
            $label="Textarea Small"
            $fullWidth
            defaultValue="Textarea"
            id="textarea-small"
          />
        </Grid>
        <Space $size={20} />
        <Grid $xsCols={1} $lgCols={2} $gap={20}>
          <Col>
            <Flex $wrap="nowrap" $gap={20}>
              <Button $size="small" $fullWidth>
                Button
              </Button>
              <Button $size="small" $variant="secondary" $fullWidth>
                Button
              </Button>
              <Button $size="small" $variant="tertiary" $fullWidth>
                Button
              </Button>
            </Flex>
          </Col>
          <Col>
            <Flex $wrap="nowrap" $gap={20}>
              <Button $size="small" $outline $fullWidth>
                Button
              </Button>
              <Button $size="small" $variant="secondary" $outline $fullWidth>
                Button
              </Button>
              <Button $size="small" $variant="tertiary" $outline $fullWidth>
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
