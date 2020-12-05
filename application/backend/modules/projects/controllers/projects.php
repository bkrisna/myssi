<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
   * Movies
   *
   *
   * @package    CodeIgniter meets ExtJS
   * @subpackage Movies
   * @author     Richard Jäger <richiejaeger@gmail.com>
   */

class Projects extends MY_Controller {

	function __construct() {
        parent::__construct();
        $this->load->model('Projects_model');
	}
	
	/*public function index() {
		echo phpinfo();
	}*/

	/**
	*
	* CREATE an item
	*
	* @return json encoded array (boolean)
	*/

	public function create() {
	    $items = json_decode($this->input->post('items'));
        $item_data = array(
            'projectname' => $items->projectname,
        	'iwo' => $items->iwo,
			'start_date' => $items->start_date,
			'end_date' => $items->end_date,
			'status' => $items->status
        );

	    $insert = $this->Projects_model->insert_entry($item_data);
	    if (intval($insert)) {
	        $item_data['id'] = $insert;
	        $data['success'] = true;
	        $data['total'] = 1;
	        $data['items'] = $item_data;
	    } else {
	        $data['success'] = false;
	        $data['title'] = 'Error';
	        $data['message'] = 'There is a problem with the database.';
	    }

		echo json_encode($data);
	}

	/**
	*
	* READ/RETRIEVE items
	*
	* @return json encoded array (items)
	*/

	public function read() {
	    $limit = $this->input->get('limit', TRUE) > '' ? $this->input->get('limit', TRUE) : 45;
		$offset = $this->input->get('start', TRUE);
		$filter = array();

		if ($this->input->get('id', TRUE) > '') {
			$where['field'] = 'id';
			$where['value'] = $this->input->get('id', TRUE);
			$where['operator'] = "=";
			array_push($filter, $where);
		}

		if ($this->input->get('query', TRUE) > '') {
			$where['field'] = 'projectname';
			$where['value'] = $this->input->get('query', TRUE);
			$where['operator'] = "LIKE";

			array_push($filter, $where);
		}

	    $sorts = json_decode($this->input->get('sort', TRUE));
	    if ($sorts) {
		    foreach ($sorts as $sort) {
		        $orders[] = $sort->property.' '.$sort->direction;
		    }
		    $order_by = implode(', ', $orders);
	    } else {
	    	$order_by = 'id asc';
		}
		
	    $total_entries = $this->Projects_model->count_all_entries($filter);
	    $entries = $this->Projects_model->get_all_entries($filter, $limit, $offset, $order_by);

	    $data['success'] = true;
	    $data['total'] = $total_entries;
	    $data['items'] = $entries;

	    extjs_output($data);
	}

	/**
	*
	* UPDATE an item
	*
	* @return json encoded array (boolean)
	*/

	public function update() {
		$items = json_decode($this->input->post('items'));

		//print_r($items);

		$filter = array(
            array(
                'field' => 'id',
                'operator' => '=',
                'value' => $items->id ? $items->id : ''
            )
        );

        /*$item_data = array(
            'title' => $items->title,
        	'year' => $items->year,
            'runtime' => $items->runtime,
            'description' => $items->description,
        );*/

	    $insert = $this->Projects_model->update_entry($filter, $items);
	    if (intval($insert)) {
	        $data['success'] = true;
	        $data['total'] = 1;
	        $data['items'] = $item_data;
	    } else {
	        $data['success'] = false;
	        $data['title'] = 'Error';
	        $data['message'] = 'There is a problem with the database.';
	    }

		echo json_encode($insert);
	}

	/**
	*
	* DESTROY/DELETE an item
	*
	* @return json encoded array (boolean)
	*/

	public function destroy() {
	    $items = json_decode($this->input->post('items'));

        $filter = array(
            array(
                'field' => 'id',
                'operator' => '=',
                'value' => $items->id ? $items->id : ''
            )
        );

	    if ($this->Projects_model->delete_enry($filter)) {
	        $data['success'] = true;
	    } else {
	        $data['success'] = false;
	        $data['title'] = 'Error';
	        $data['message'] = 'There is a problem with the database.';
	    }

	    extjs_output($data, 'html');
	}

}