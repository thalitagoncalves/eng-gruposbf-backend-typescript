import _convert from './converter';
import Logger from '../../utils/logger';
import GetQuotation from './ports/coins-api/index';

export default { convert: _convert(GetQuotation, Logger) };
