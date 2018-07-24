import { PureComponent } from "react";
import withStyle from "../../../global/withStyle";

class SelectBox extends PureComponent {
  static defaultProps = {
    className: "",
    onSelect: () => {}
  };

  state = {
    value: this.props.selected
  };

  onChange(e) {
    const { value } = e.target;
    this.props.onSelect(value);
    this.setState({ value });
    return { value };
  }

  render() {
    const { options, className } = this.props;
    return (
      <div className={`form-group select-box ${className}`}>
        <select
          value={this.state.value}
          onChange={e => this.onChange(e)}
          className="form-control"
        >
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default withStyle(SelectBox);
