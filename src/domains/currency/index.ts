import _convert from './converter';
import GetQuotation from '../../ports/coins-api/index';

export default { convert: _convert(GetQuotation) };
