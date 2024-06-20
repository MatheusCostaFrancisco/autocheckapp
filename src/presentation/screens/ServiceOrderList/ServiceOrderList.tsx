import {Card, IconButton, Input} from '../../components';
import { useTheme } from '../../theme/theme';

export type WorkOrderProps ={
  Proprietario: string;
  Codigo: number;
  Marca: string;
  Placa: string;
  Data: string;
  Modelo: string;
  Ano: string;
  Status: boolean
}

export default function ServiceOrderList({navigation, route}) {
  const [workOrders, setWorkOrders] = useState<WorkOrderProps[]>([]);
  const [search, setSearch] = useState<string>('');
  const {theme} = useTheme()
  const [filters, setFilters] = useState<{
    status: 'approved' | 'ongoing' | undefined
  }>({});

  // #region LOAD_DATA
  const getAllOrders = async ()=>{
    const data = await getAllOrdersService.getAll();

    if(data.Data.length > =){
      setWorkOrders(data.Data)
    }
  }
  // #end region

    // #region filters
  const list = useMemo(()=> {
if(search.length >0){
  return list.filter(x=> x.Marca === search)
}

if (filters){
  return list.filter(x=> x.Status === filters.status)
}

  }, [search])
    // #end region

    // #region handlers
    const handleNavigation=()=> {
      navigation.navigate('ServiceOrderForm')
    }

    const handlePrint=(item: WorkOrderProps)=> {
      console.log()
    }

    const handleSign=(item: WorkOrderProps)=> {
      console.log()
    }
    // #end region



       // #region render
  const renderItem = (item: ListRenderInfoItem<WorkOrderProps>)=> {
    return(
      <Card 
      title={`${item.Proprietario} #${item.Codigo}`}
      onPress={handleNavigation}
      rows={[
        {
          type: 'single-line',
          displayProps: {
            prop: 'Marca',
            value: item.Marca
          }
        },
        {
          type: 'single-line',
          displayProps: {
            prop: 'Placa',
            value: item.Placa
          }
        }
        {
          type: 'single-line',
          displayProps: {
            prop: 'Data',
            value: item.Data
          }
        },
        {
          type: 'single-line',
          displayProps: {
            prop: 'Modelo',
            value: item.Modelo
          }
        },
        {
          type: 'single-line',
          displayProps: {
            prop: 'Ano',
            value: item.Ano
          }
        }]}
       icons={[
        {
          icon:{
            name: 'printer',
            color: theme.colors.blue[500]
          },
          onPress: handlePrint(item)
        },
        {

          icon:{
            name: 'finger-print',
            color: theme.colors.green
          },
          onPress: handleSign(item)
        }
      ]} />
    )
  };
  


  return (
    <SearchHeader>
      <Input onChange={setSearch} value={search} placeholder={'Pesquisar'}/>

<IconButton icon={{
  name: 'filter'
}} />
    </SearchHeader>
  <FlatList
  renderItem={renderItem}
  data={workOrders}
  />
);
}
        // #end region

